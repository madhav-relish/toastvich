# Toast Notification System

## Overview

This project is a fully functional frontend toast notification system built with React + TS, making it completely type safe. It provides a comprehensive and customizable way to deliver user feedback and alerts within a web application. The toast notifications are designed to be independent, reusable, and easily integrated into any part of the application.

## Key Features

- **Independent and Reusable**: The toast component is self-contained, allowing for easy integration throughout the application.
- **Configurable Delay**: Customize the display duration of each toast notification to suit your needs.
- **Actionable Toasts**: Users can interact with toasts through clicks or other actions, enhancing user experience.
- **Default Toast Types**: Predefined toast types are included for success, info, error, and warning messages.
- **Custom Toast Support**: Flexibility to create custom toast messages with unique content and styling.

## Usage

To use the toast notification system in your project, import the toast component and integrate it into your React application. Customize the toast messages and display duration as needed. The system supports both default and custom toast types, allowing you to tailor notifications to your application's requirements.

```
import { ToastProvider } from "./hooks/useToast";
const App = () => (
<ToastProvider>
    <App/>
</ToastProvider>
```

You can then use the `useToast` hook to show notifications:
```
const { showToast } = useToast();
showToast({ message: "This is a success toast!", type: "success", duration: 5000 });
```


Add custom JSX to render your own toast:
```
showToast({
   render: (
        <div className="bg-red-700 px-2">
            This is a JSX rendered toast
        </div>
              ),
    type: "default",
})
```
