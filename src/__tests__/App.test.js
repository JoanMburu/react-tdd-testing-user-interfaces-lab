
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});


test("displays an image of yourself with alt text", () => {
    render(<App />);
    
    const image = screen.getByAltText(/image of me/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "your-image-url.jpg");
  });


  test("displays a second-level heading with the text `About Me`", () => {
    render(<App />);
    
    const secondLevelHeading = screen.getByRole("heading", { level: 2, name: /about me/i });
    expect(secondLevelHeading).toBeInTheDocument();
  });


  test("displays a paragraph for the biography", () => {
    render(<App />);
    
    const biography = screen.getByText(/this is my biography/i);
    expect(biography).toBeInTheDocument();
  });
  

  test("displays a link to the GitHub page", () => {
    render(<App />);
    
    const githubLink = screen.getByRole("link", { name: /github/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/your-profile");
  });
  
  
  test("displays a link to the LinkedIn page", () => {
    render(<App />);
    
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    expect(linkedinLink).toBeInTheDocument();
    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/your-profile");
  });
  
  