import Banner from '@/components/banner/Banner'
import FeatureCard from '@/components/featureCard/FeatureCard '
import chatIcon from '@/assets/images/icon-chat.png'
import moneyIcon from '@/assets/images/icon-money.png'
import securityIcon from '@/assets/images/icon-security.png'

const dataBanner = {
  title : 'No fees.  No minimum deposit.High interest rates.',
  description : 'Open a savings account with Argent Bank today!'
}

const dataFeatureCard = [{
  image_url : chatIcon,
  title : 'You are our #1 priority',
  description : 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
},{
  image_url : moneyIcon,
  title : 'More savings means higher rates',
  description : 'The more you save with us, the higher your interest rate will be!'
},{
  image_url : securityIcon,
  title : 'Security you can trust',
  description : 'We use top of the line encryption to make sure your data and money is always safe.'
},]

export default function Home() {
  return (
    <>
      <Banner title={dataBanner.title} description={dataBanner.description}/>
      <section className='flex flex-col md:flex-row justify-center items-start mt-10'>
        {
          dataFeatureCard.map((data, index) => (
            <FeatureCard 
              key={index}
              image_url={data.image_url}
              title={data.title}
              description={data.description}
            />
          ))
        }
      </section>
    </>
  )
}
