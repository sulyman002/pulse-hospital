import Image from 'next/image';


const loader = () => {
  return (
    <div className="h-screen flex items-center justify-center">
        <div className="flex items-center">
            <Image src={"/loader.png"} alt='loader' width={100} height={100} />
            <div className="">
                <h2 className="">Total</h2>
                <p className="">HealthCare</p>
            </div>
        </div>
    </div>
  )
}

export default loader