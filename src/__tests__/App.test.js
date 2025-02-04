import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays an image with alt text describing the content", () => {
    render(<App />);
    const image = screen.getByAltText(/Profile Picture/i); // Correct alt text
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src"); // Check if image source exists
  });
  
  
  test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);
    const aboutMeHeading = screen.getByRole("heading", {
      name: /about me/i,
      level: 2,
    });
    expect(aboutMeHeading).toBeInTheDocument();
  });
  

  test("displays a paragraph with biography text", () => {
    render(<App />);
    const paragraph = screen.getByText(/I am a passionate developer/i);
    expect(paragraph).toBeInTheDocument();
  });
  

  test("displays a link to GitHub and LinkedIn", () => {
    render(<App />);
    
    const githubLink = screen.getByRole("link", {
      name: /github/i,
    });
    expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
  
    const linkedinLink = screen.getByRole("link", {
      name: /linkedin/i,
    });
    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/yourusername");
  });
  