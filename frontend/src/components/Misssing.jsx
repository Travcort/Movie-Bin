const Missing = ({ error }) => {
    return (
        <div className="relative flex flex-col mt-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 m-auto">
            <div className="p-4">
                <h5 className="mb-2 text-slate-800 text-xl font-semibold text-center">
                    {error}
                </h5>
            </div>
        </div>
    );
}

export default Missing;