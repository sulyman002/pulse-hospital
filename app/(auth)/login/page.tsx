import { Eye, Key } from "lucide-react"
import { sofia } from "@/app/ui/fonts"

const Login = () => {
  return (
    <section className="min-h-screen w-full flex justify-center bg-blue-50">
        <div className="flex flex-col md:flex-row gap-30 mt-20 bg-red-400">
            {/* welcome info */}
            <div className="flex flex-col gap-16">
                <div className="primary-text text-5xl font-bold">
                  <h1 className="font-800 text-6xl secondary-text">Welcome</h1>
                  <p className="font-500 text-5xl primary-text">Login to your account</p>
                </div>
                <button className="primary-bg text-base text-semibold text-white py-2 px-4 rounded-md">New here? Setup your practice</button>
            </div>
            {/* Login form */}
              <div className="rounded-5 border border-[#DFE8FC] drop-shadow-2xl flex flex-col gap-10">
                <div className="flex items-center gap-4 px-5">
                  <div className="rounded-3.75 p-1 flex items-center justify-center bg-[#DFE8FC]">
                    <Key size={24} className="primary-text" />
                  </div>
                  <h3 className={`${sofia.variable} secondary-text font-700 text-1xl`}>Login</h3>
                </div>
                <hr />

                <form className="flex flex-col gap-5 w-full">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[#8E919C] font-500 text-sm">Email</label>
                    {/* i will later implement RHF here */}
                    <input type="email" name="email" id="email" placeholder="example@gmail.com" className="secondary-text placeholder:text-[#7b7e86] text-base"/>
                  </div>
                  {/* password */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-[#8E919C] font-500 text-sm">Password</label>
                    {/* i will later implement RHF here */}
                    <div className="flex items-center ">
                      <input type="password" name="password" id="password" placeholder="••••••••" className="secondary-text placeholder:text-[#7b7e86] text-base flex-1"/>
                      <Eye size={24} className="text-[#8E919C]" />
                    </div>
                  </div>

                  <button className="primary-bg text-base font-700 text-semibold text-white py-2 px-4 rounded-md">Login</button>
                  <p className="primary-text text-sm ">forgot password?</p>
                </form>
              </div>
        </div>
    </section>
  )
}

export default Login