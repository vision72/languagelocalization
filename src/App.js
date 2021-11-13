import React from 'react';
import { useTranslation } from 'react-i18next';
import Form from './Form';

export default function App() {
	const { t, i18n } = useTranslation();
	return (
		<div>
			<Form t={t} i18n={i18n} />
		</div>
	);
}
