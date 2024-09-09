'use client'
import styles from './page.module.css'
import { useEffect } from 'react'
import { initOTPless } from '../utils/initOtpless'

export default function Home() {
	useEffect(() => initOTPless(callback), [])
	/** callback - otpless callback function
	 * @description
	 * This function is called after authentication is done by otpless-sdk.
	 * Use this function to further process the otplessUser object, navigate to next page or perform any other action based on your requirement.
	 * @param {Object} otplessUser
	 * @returns {void}
	 */
	const callback = (otplessUser: Object): void => {
		// Replace the following code with your own logic
		console.log(otplessUser)
		alert(JSON.stringify(otplessUser))
	}

	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<div id='otpless-login-page'></div>
			</main>
		</div>
	)
}
