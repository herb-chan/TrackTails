# Coding Style Guidelines

### General Principles

-   **Consistency**: Maintain consistent naming conventions, formatting, and code organization throughout the project.

-   **Readability**: Write clear and understandable code. Use descriptive names for variables, functions, and components.

-   **Modularity**: Keep functions and components focused on single responsibilities. Avoid large, monolithic components or functions.

-   **Documentation**: Document complex logic, edge cases, and assumptions using comments. Ensure code is self-explanatory where possible.

### TypeScript

-   **Naming Conventions**:

    -   Use camelCase for variables, functions, and class members.
    -   Use PascalCase for React components and other classes.
    -   Use descriptive and meaningful names.

-   **Variables and Constants**:

    -   Prefer `const` for variables and `let` only when reassignment is necessary.

-   **Functions**:

    -   Write small, focused functions that perform one task.
    -   Use descriptive function names that convey their purpose.

-   **Imports**:

    -   Import modules in a consistent order: external libraries first, followed by local imports.
    -   Use aliasing for imports to maintain clarity.

    ```ts
    import React from "react";
    import { StyleSheet, Text } from "react-native";
    import Constants from "./constants";
    import * as utils from "./utils";
    ```

-   **Whitespace and Formatting**:

    -   Use 2 or 4 spaces for indentation.
    -   Use semicolons at the end of statements.
    -   Use meaningful whitespace to enhance readability.

    ```ts
    function greet(name: string): void {
        const message = `Hello, ${name}!`;
        console.log(message);
    }
    ```

-   **Comments**:

    -   Use comments to explain why code is written, especially for complex logic or non-obvious solutions.
    -   Avoid redundant comments that simply restate what the code does.

    ```ts
    // Calculate the sum of two numbers
    function add(a: number, b: number): number {
        return a + b;
    }
    ```

### React Native Specific Guidelines

-   **Styling**:

    -   Use StyleSheet from react-native for defining styles to improve performance and avoid inline styles.

    ```ts
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        buttonText: {
            fontSize: 18,
            color: "white",
        },
    });
    ```

-   **Component structure**:

    -   Organize components into functional components and class components (if necessary).
    -   Utilize React hooks (`useState`, `useEffect`, etc.) for state management in functional components.

-   **Navigation**:
    -   Use a consistent naming convention for screen names in navigation (e.g., PascalCase for screens).

### Testing

-   **Unit Tests**:
    -   Write unit tests for critical functions and components using Jest and React Testing Library.
    -   Test edge cases and handle exceptions gracefully.

### Git and Version Control

-   **Commit Messages**:

    -   Write clear, concise, and descriptive commit messages in present tense.
    -   Include relevant details about what has been changed and why.

-   **Branching**:
    -   Create feature branches (`feature/new-feature`) for each new feature or bug fix.
    -   Keep the `main` branch stable and deployable.
