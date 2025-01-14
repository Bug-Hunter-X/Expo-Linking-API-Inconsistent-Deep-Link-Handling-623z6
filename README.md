# Expo Linking API Inconsistent Deep Link Handling

This repository demonstrates a bug in the Expo `Linking` API where the event listener for deep links sometimes fails to trigger when the app is in the background.  The `bug.js` file showcases the problematic code, while `bugSolution.js` offers a potential workaround.

## Problem
The standard approach using `Linking.addEventListener` does not reliably catch deep links when the app is backgrounded.  This leads to inconsistent app behavior when opening deep links.

## Solution
The `bugSolution.js` file provides a more robust approach using a combination of `Linking.addEventListener` and potentially background tasks (depending on OS capabilities and Expo SDK version). This solution improves deep link capture reliability even when the application isn't in the foreground.