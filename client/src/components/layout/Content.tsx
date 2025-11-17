import {type PropsWithChildren} from "react";

const Content = ({children}: PropsWithChildren) => {
    return(
        <div className="content bg-white rounded-xl shadow-sm p-6">{children}</div>
    );
}

export default Content;