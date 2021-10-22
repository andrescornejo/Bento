// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: 'Andrés',
  imageBackground: false,
  openInNewTab: false,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning!',
  greetingAfternoon: 'Good afternoon,',
  greetingEvening: 'Good evening,',
  greetingNight: 'Go to Sleep!',

  // Weather
  weatherKey: '82a2633bac914021ff5a0f1536f27be6',
  weatherIcons: 'OneDark', // 'Nord', 'Dark', 'White'
  weatherUnit: 'C', // 'F', 'C'
  language: 'en', // More languages in https://openweathermap.org/current#multi

  trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  defaultLatitude: '37.775',
  defaultLongitude: '-122.419',

  // ┌─┐┌─┐┬─┐┌┬┐┌─┐
  // │  ├─┤├┬┘ ││└─┐
  // └─┘┴ ┴┴└──┴┘└─┘

  // Links
  cards: [
    {
      id: '1',
      name: 'tecDigital',
      icon: 'type',
      link: 'https://tecdigital.tec.ac.cr/',
    },
    {
      id: '2',
      name: 'Mail',
      icon: 'mail',
      link: 'https://gmail.com',
    },
    {
      id: '3',
      name: 'Tasks',
      icon: 'check-circle',
      link: 'https://cloud.andrescornejo.com/apps/tasks',
    },
    {
      id: '4',
      name: 'Calendar',
      icon: 'calendar',
      link: 'https://cloud.andrescornejo.com/apps/calendar',
    },
    {
      id: '5',
      name: 'Github',
      icon: 'github',
      link: 'https://github.com/',
    },
    {
      id: '6',
      name: 'Odysee',
      icon: 'youtube',
      link: 'https://youtube.com/',
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'globe',
  secondListIcon: 'pen-tool',

  // Links
  lists: {
    firstList: [
      {
        name: 'ProtonMail',
        link: 'https://account.protonmail.com/login',
      },
      {
        name: 'Google Drive',
        link: 'https://drive.google.com',
      },
    ],
    secondList: [
      {
        name: 'Language Tool',
        link: 'https://languagetool.org/',
      },
      {
        name: 'Translate',
        link: 'https://www.reverso.net/text-translation/',
      },
      {
        name: 'PONS Dictionary',
        link: 'https://en.pons.com/translate/english-german/',
      },
    ],
  },
};
