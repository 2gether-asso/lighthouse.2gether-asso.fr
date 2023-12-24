const defaultLocale =
[
	'What is {0}?',
	'Visit our website',
	'Join our Discord',
	'Look at the TV',
	'You are tired of waiting for official announcements and want to have clues about the next advances of 2GETHER? It\'s possible with 2GETHER LIGHTHOUSE:',
	'Access the secure direct line to the lighthouse and try to decrypt the transmissions to access exclusive content on 2GETHER!',
] as const

type Keys = typeof defaultLocale[number]
type Type = { [key in Keys]: key }

// Default locale uses the key as the value
const locale = defaultLocale
	.reduce<Type>((acc, key) =>
		{
			(acc as any)[key] = key
			return acc
		},
		{} as Type,
	)

export default locale as Readonly<typeof locale>
