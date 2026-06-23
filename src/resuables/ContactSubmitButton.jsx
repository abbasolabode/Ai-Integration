export default function ContactSubmitButton({ isPending, isSubmitting, SyncLoader }) {
    return (
        <div className="mt-8 flex items-center gap-4">
            <button
                type="submit"
                disabled={isSubmitting || isPending}
                className="inline-flex cursor-pointer items-center px-10 py-3 text-lg font-bold rounded-xl text-white bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 shadow-xl"
            >
                {isPending || isSubmitting ? "Submitting..." : "Submit"}
            </button>

            {/* Spinner container */}
            <span>
                {(isPending || isSubmitting) && <SyncLoader />}
            </span>
        </div>
    )
}
