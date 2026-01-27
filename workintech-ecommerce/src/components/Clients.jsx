export default function Clients() {
    return(
        <div className="px-2 py-[50px] flex gap-30 bg-[#FAFAFA] flex items-center justify-center">
            <div className="clients-item">
                <img src="src\assets\client\hooli.png" alt="Hooli" className="max-w-40"/>
            </div>
            <div className="clients-item">
                <img src="src\assets\client\lyft.png" alt="Lyft" className="max-w-40 max-h-15"/>
            </div>
            <div className="clients-item">
                <img src="src\assets\client\meta.png" alt="Meta" className="max-w-40 max-h-18"/>
            </div>
            <div className="clients-item">
                <img src="src\assets\client\stripe.png" alt="Stripe" className="max-w-40 max-h-13"/>
            </div>
            <div className="clients-item">
                <img src="src\assets\client\aws.png" alt="Amazon Web Services" className="max-w-40 max-h-15"/>
            </div>
            <div className="clients-item">
                <img src="src\assets\client\reddit.png" alt="Reddit" className="max-w-40 max-h-18"/>
            </div>
        </div>
    )
}