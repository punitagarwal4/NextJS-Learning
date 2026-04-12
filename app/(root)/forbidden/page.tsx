import { forbidden } from "next/navigation";

const ForbiddenPage: React.FC = () => {
    forbidden(); // This will trigger the 403 Forbidden response
    return (
        <div>
        </div>
    );
};

export default ForbiddenPage;