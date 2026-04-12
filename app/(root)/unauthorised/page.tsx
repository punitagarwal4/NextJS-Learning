import { unauthorized } from "next/navigation";

const UnauthorisedPage: React.FC = () => {
    unauthorized(); // This will trigger the 401 Unauthorized response
    return (
        <div> </div>
    );
}

export default UnauthorisedPage;