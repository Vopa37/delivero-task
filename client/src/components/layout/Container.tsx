import {type PropsWithChildren} from "react";


const Container = ({children}: PropsWithChildren) => {
    return(
        <div className="container mx-auto px-4 py-6">{children}</div>
    );
}

export default Container;