const Contact = () => {
    return (
        <section className="text-center pt-[90px]" id="contact">
            <h1 className="font-bold text-dark text-6xl pb-[90px]">
                Contact
            </h1>
            <ul className="flex justify-center items-center text-lg space-x-4">
                <li>
                    <span className="uppercase text-orange ">Call: </span>{'  '}
                    <span className="text-dark">+91 8686683293</span>
                </li>
                <li>
                    <span className="w-[7px] h-[7px] rounded-full bg-orange inline-block"/>
                </li>
                <li>
                    <span className="uppercase text-orange ">Write: </span>{'  '}
                    <span className="text-dark">aamanimachani@gmail.com</span>
                </li>
            </ul>

            <div>
                <form className="flex flex-col items-center p-[90px]">
                    <div className="flex items-center w-full">
                        <input type="text" placeholder="Name" className="w-[50%] mx-2 bg-light h-[70px] text-sm font-medium text-dark border-b-2 mb-[30px]" />
                        <input type="email" placeholder="Email" className="w-[50%] mx-2 bg-light h-[70px] text-sm font-medium text-dark border-b-2 mb-[30px]" />
                    </div>
                    <div className="w-full">
                        <textarea placeholder="Message" className="w-full mb-[30px] border-b-2 text-dark font-medium text-sm h-[300px] bg-light"/>
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="px-[20px] py-[15px] border-none bg-orange text-white font-medium text-sm">Send Message</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;