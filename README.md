![image](https://github.com/user-attachments/assets/40dfdf28-cf3c-4f48-8af1-8a7a709f664b)
## Colour Palette Generator

### Live Link Site 
https://owend-24.github.io/JS-Colour-Picker-Project/index.html

## Brief Introduction
The Colour Palette Generator is a web application that allows users to generate and view different colour palettes. 
Users can click on colour cards to copy colour codes to their clipboard, generate new palettes using a button or keyboard shortcuts, and refresh the palette.

## Responsivity Example Image
![image](https://github.com/user-attachments/assets/8ad8961b-e015-46c6-b979-127245341131)

## Contents
1. **UX (User Experience)**
    - **User Stories**
    - **Strategy**
    - **Scope**
    - **Structural**
    - **Skeleton**
    - **Wireframe**
    - **Surface**
2. **Design**
    - **Typography**
    - **Colour Scheme**
    - **Imagery**
3. **Website Features**
4. **Tablet/Mobile View**
5. **Future Features**
6. **Technology Used**
7. **Deployment**
8. **Testing**
9. **Credits**

## 1. UX (User Experience)
### User Stories
![image](https://github.com/user-attachments/assets/7ce9c24d-d3c9-423e-a73e-4cf002c8ae7e)

### Strategy
The goal of this project is to provide an easy-to-use tool for generating colour palettes. 
The design is focused on simplicity and ease of use, with interactive features to enhance user experience.

### Scope
The application will generate a set of colour cards, each displaying a different colour. 
Users can interact with these cards to copy colours, and generate or refresh palettes using buttons or keyboard shortcuts.

### Structural
- **Header**: Contains the logo and main heading.
- **Main Content**: A grid of colour cards, Buttons for generating and refreshing palettes.
- **Footer**: Social links and copyright

### Skeleton
The layout is designed using a grid system to ensure responsiveness. 
The colour cards are arranged in a flexible grid that adapts to different screen sizes.

### Wireframe
![image](https://github.com/user-attachments/assets/78484c5f-71e5-4ab0-9715-eb052447af54)

### Surface
The design uses Tailwind CSS for styling, with a focus on clean and modern aesthetics. 
The colour palette is bright and engaging, with interactive elements providing feedback to users.

## 2. Design
### Typography
- **Primary Font**: Tailwind CSS default font stack
- **Font Sizes**: Various sizes used for headings, text, and buttons.
  
### Colour Scheme
- **Background Colour**: Gray (#f7fafc)
- **Primary Colour**: Sky Blue (#38bdf8)
- **Accent Colours**: Various shades of red, orange, yellow, green, and blue.
  
### Imagery
- **Logo**: `assets/js/images/logo.png`
- **Favicon**: `assets/js/images/favicon.png`
![4704539](https://github.com/user-attachments/assets/b08b23e6-7bea-47dd-a6e9-a3ac4d07363b)

## 3. Website Features
- **Generate Palette**: Generates a new colour palette with random colours.
- **Refresh Palette**: Refreshes the current palette to display a new set of colours.
- **Copy Colour**: Allows users to copy the colour code to the clipboard.
- **Keyboard Shortcuts**: Press Spacebar to generate a new palette and Backspace to refresh.
  
### JavaScript Logic/Functionality
- **Event Listeners**: Handle click events on colour cards, button clicks, and keyboard shortcuts.
- **Palette Generation**: Generates random colours and updates the colour cards.
- **Clipboard Copying**: Uses the Clipboard API to copy colour codes to the clipboard.
- **Notification**: Displays a notification when a colour is copied to the clipboard.

## 4. Tablet/Mobile View
The website is designed to be responsive, using Tailwind CSS grid system to ensure proper display on tablets and mobile devices.
The layout adjusts to fit different screen sizes, ensuring a consistent user experience across devices.
![image](https://github.com/user-attachments/assets/35c8de10-ab2d-4c5c-acd1-ac070c24b611)

## 5. Future Features
- **Back Button**: Allow users to go back to the previous palette they were on.
- **Custom Colour Palette Creation**: Allow users to create and save custom colour palettes.
- **Colour Contrast Analysis**: Provide feedback on colour contrast for accessibility.
- **Export Palette**: Enable users to export their generated palette as an image or text file.

## 6. Technology Used
### Languages
- **HTML**
- **CSS**
- **JavaScript**
  
### Frameworks
- **Tailwind CSS**: For responsive design and styling.
  
### Libraries
- **Clipboard API**: For clipboard interaction.
- **Font Awesome Icons**: For Footer section social links.
  
### Programs
- **GitHub**: For version control and deployment.

## 7. Deployment
- Deployed website having no issues, everything works as it should.
![image](https://github.com/user-attachments/assets/84788245-9fb5-43dd-a7bd-92297af8d05c)

## 8. Testing
### Colour Contrast
- WCAG Contrast Checker Extension
![image](https://github.com/user-attachments/assets/02d50191-23be-41b2-a0db-28bc0e4bae8e)

### Validation
- **HTML & CSS**: Validated using [W3C HTML Validator](https://validator.w3.org/)
![image](https://github.com/user-attachments/assets/9390532f-e083-4542-a1d1-de732510e074)

- **JavaScript**: Tested for errors and functionality on console log.
![image](https://github.com/user-attachments/assets/01cb86bd-8637-4148-8d11-ea45cd9a4cd2)

### Lighthouse Audits
- **Performance**: Ensured good performance scores.
- **Accessibility**: Checked for accessibility issues.
- **Best Practices**: Verified adherence to best practices.
![image](https://github.com/user-attachments/assets/216c0819-a990-49e8-ae1d-8cbf9498b712)

### Bugs
- Fixed tailwind error on console.log.
- Fixed issues related to colour card responsiveness.
- Addressed minor bugs in clipboard copying functionality.
- Fixed issues with the clicking listeners.
- Fixed issues causing palette cards to distort.

## 9.Credits
### Content References
- **Inspiration**: Examples of colour palette generators from various design resources and tutorials.
  
### Media References
- **Images**: Logo and favicon sourced from Google Images..
- **Font Awesome Icons**: Used for Footer section.
  
### Acknowledgments
- **Tailwind CSS**: For providing a powerful utility-first CSS framework.
- **W3Schools:** Developing new Listeners and Functions.
- **A little bit perplexity and chat GPT**: Bug fixes and Validation









