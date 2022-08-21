import Layout from '../components/Layout'
import { SiteType } from '../types'

const SiteIndex = () => {
  const site: SiteType = {
    name: 'Biller',
    logo: 'https://launchman-space.nyc3.digitaloceanspaces.com/launchman-logo.png',
    title: "You don't have to chase your clients around to get paid",
    description:
      'Freelancers use Biller to accept payments and send invoices to clients with a single click',
    image:
      'https://launchman-space.nyc3.digitaloceanspaces.com/biller-hero-2.png',
    video:
      'https://launchman-space.nyc3.digitaloceanspaces.com/biller-hero-2.webm',
    features: [
      {
        title: 'Detailed Analytics',
        description:
          "No more spending hours writing formulas in Excel to figure out how much you're making. We surface important metrics to keep your business going strong.",
        image:
          'https://launchman-space.nyc3.digitaloceanspaces.com/chakra-ui-landing-page-feature-1.png',
      },
      {
        title: 'Track your clients',
        description:
          'Know when and how your projects are going so you can stay on top of delivery dates.',
        image:
          'https://launchman-space.nyc3.digitaloceanspaces.com/chakra-ui-landing-page-feature-2.png',
      },
      {
        title: 'Manage projects',
        description:
          "You don't have to hunt your email inbox to find that one conversation. Every task, project, and client information is just a click away.",
        image:
          'https://launchman-space.nyc3.digitaloceanspaces.com/chakra-ui-landing-page-feature-3.png',
      },
    ],
    highlights: [
      {
        icon: '✨',
        title: 'No-code',
        description:
          "We are No-Code friendly. There is no coding required to get started. Launchman connects with Airtable and lets you generate a new page per row. It's just that easy!",
      },
      {
        icon: '🎉',
        title: 'Make Google happy',
        description:
          "We render all our pages server-side; when Google's robots come to index your site, the page does not have to wait for JS to be fetched. This helps you get ranked higher.",
      },
      {
        icon: '😃',
        title: 'Rapid experimenting',
        description:
          "You don't have to wait hours to update your hard-coded landing pages. Figure out what resonates with your customers the most and update the copy in seconds",
      },
      {
        icon: '🔌',
        title: 'Rapid experimenting',
        description:
          "You don't have to wait hours to update your hard-coded landing pages. Figure out what resonates with your customers the most and update the copy in seconds",
      },
    ],
    faqs: [
      {
        q: 'How many clients can I bring on?',
        a: 'You can bring on 3 clients with the Free plan. Upgrade to Pro for additional seats.',
      },
      {
        q: 'Can I connect it to my CRM?',
        a: 'Yes! We support Notion and PipeDrive currently.',
      },
      {
        q: 'Do you support international payments?',
        a: 'Yes - payments can be made from and to any country.',
      },
      {
        q: 'Who can I connect to for support?',
        a: 'Email me at sukh@saasbase.dev',
      },
    ],
    twitterHandle: 'thisissukh_',
  }

  const {
    name,
    logo,
    title,
    description,
    image,
    video,
    features,
    highlights,
    faqs,
    twitterHandle,
  } = site

  return <Layout></Layout>
}

export default SiteIndex
