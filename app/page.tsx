import CompanionCard from '@/components/ui/CompanionCard'
import CompanionsList from '@/components/ui/CompanionsList'
import CTA from '@/components/ui/CTA'
import { recentSessions } from '@/constants'
// import { Button } from '@/components/ui/button'

const Page = () => {
  return (
    <main>
      <h1 className='text-2xl underline'> Popular Course </h1>
      <section className='home-section'>
      <CompanionCard 
        id="123"
        name="Neural the Brainy Explorer"
        topic="Neural Network of the Brain"
        subject= "science"
        duratation={45}
        color="ffda6e"
      />
      <CompanionCard 
        id="456"
        name="Contry the number wizard"
        topic="Derivatives & Integrals"
        subject= "Math"
        duratation={35}
        color="e5d0ff"
      />
      <CompanionCard 
        id="789"
        name="Verbe The vocabulary builder"
        topic="language "
        subject= "English Literature"
        duratation={47}
        color="bde7ff"
      />

      </section>
      <section className='home-section'>
      <CompanionsList
        title ="Cours recamment "
        companions={recentSessions}
        classNames= "w-2/3 max-lg:w-full"
      />
      <CTA />
      </section>
    </main>
  )
}

export default Page