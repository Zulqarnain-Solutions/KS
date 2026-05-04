import { createPortal } from "react-dom";
/*
This component creates a React Portal.

Instead of rendering inside #root,
it renders inside #modal-root.
*/

function Model({modelIsOpen, setModelIsOpen, children}){

    return createPortal(
        (
            <div
            className={`login-card fixed inset-0 flex items-center justify-center pt-10 px-4 bg-black/40 
                ${modelIsOpen ? '' : 'hidden' }`}
            onClick={() => setModelIsOpen(!modelIsOpen)}
            >
                <div className="
                bg-white
                max-w-2xl
                w-full
                overflow-y-auto
                max-h-[90vh]
                border
                rounded-xl
                p-6
                border-gray-200"
                onClick={ (e) => e.stopPropagation() }
                >
                    {children}
                </div>
            </div>
        ),
        document.getElementById("model")
    )
}

export default Model;