import Image from "next/image"
import Link from "next/link"

const CTA = () => {
  return (
      <section className="cta-section">
        <div className="cta-badge">start learning as you like</div>
        <h2 className="text-3xl font-bold">
          Build and personalize your oun Course
        </h2>
        <p>Pick a name, subject, voice & personality - and start learn </p>
        <Image src="images/cta.svg" alt="cta" width={362} height={232}/>
        <button className="btn-primary">
          <Image src="/icons/plus.svg" alt="plus" width={12} height={12}  />
          <Link href= "/companions/new">
            <p>build new cours</p>
          </Link>
        </button>
      </section>
  ) 
}

export default CTA