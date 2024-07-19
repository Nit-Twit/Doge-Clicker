interface AlertProps {
    title: string;
    message: string;
    buttonMessage: string;
    type: 'success' | 'error' | 'level-up';
}

export default function Alert({ title, message, buttonMessage, type }: AlertProps) {
    return (
        <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 w-full h-full fixed top-0 left-0">
            <div className="flex flex-col items-center justify-center bg-white p-5 rounded-md">
                <h1 className="text-3xl font-semibold">{title}</h1>
                <p className="text-lg">{message}</p>
                <button className="bg-blue-500 text-white p-2 rounded-md">{buttonMessage}</button>
            </div>
        </div>
    );
}
