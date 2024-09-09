export const initOTPless = (callback: Function): void => {
	Reflect.set(window, 'otpless', callback)
	const isScriptLoaded = document.getElementById('otpless-sdk')
	if (isScriptLoaded) return

	const otplessSDK: HTMLScriptElement = document.createElement('script')
	otplessSDK.id = 'otpless-sdk'
	otplessSDK.type = 'text/javascript'
	otplessSDK.src = 'https://otpless.com/v2/auth.js'
	// TODO: Add your app id
	otplessSDK.setAttribute('data-appid', 'PASTE_YOUR_APPID_HERE')

	document.head.appendChild(otplessSDK)
}
