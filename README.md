[![OTPless](https://d1j61bbz9a40n6.cloudfront.net/website/home/v4/logo/white_logo.svg)](https://otpless.com/)

# NextJS Demo: Otpless Login Page

## Steps to add OTPless SDK to your NextJS Website

1. **Create an App in [OTPless dashboard](https://otpless.com/dashboard/customer/dev-settings) and copy the `APP ID`**
2. **Add the function to append *OTPless Script* to document *head***

    > Add the following code to your utils/initOtpless.js in root directory.

    ```js
    export const initOTPless = (callback: Function) => {
        Reflect.set(window, 'otpless', callback)
        const isScriptLoaded = document.getElementById('otpless-sdk')
        if (isScriptLoaded) return

        const otplessSDK: HTMLScriptElement = document.createElement('script')
        otplessSDK.id = 'otpless-sdk'
        otplessSDK.type = 'text/javascript'
        otplessSDK.src = 'https://otpless.com/v2/auth.js'
        otplessSDK.setAttribute('data-appid', 'PASTE_YOUR_APPID_HERE')

        document.head.appendChild(otplessSDK)
    }
    ```

    > [view source](./src/utils/initOtpless.ts#L1)

3. **Load the script in Login/Signup component and add callback function**

    > Add following code in Login/Signup component.
    >> retrive data using **otplessUser** object

    ```jsx
    useEffect(() => initOTPless(callback), []);

    const callback = (otplessUser: Object): void => {
        // Replace the following code with your own logic
        console.log(otplessUser)
        alert(JSON.stringify(otplessUser))
    }
    ```

    > [view source](./src/app/page.tsx#L7)

4. **Add OTPless Auth modal**

    > Add the following div#otpless-login-page in Login/Signup component.

    ```html
    <div id="otpless-login-page"></div>
    ```

### This demo implementation adds extra modularity, scalability and reusability to the otpless-auth sdk

### Usage

> **Prerequisites**: [NodeJS](https://nodejs.org/en)

- Install Packages

    ```bash
    npm install
    ```

- Run the demo

    ```bash
    npm run dev
    ```

- Open [localhost:3000](http://localhost:3000) in your browser
- Switch branches to check out available options to integrate *OTPless* in your project

## *Thank You*

## [Visit OTPless](https://otpless.com/docs/frontend-sdks/web-sdks/react/pre-built-ui)
