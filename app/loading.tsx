import Loader from '@/components/Loader/Loader';

export default function Loading() {
    return (
        <div className="pageLoader">
            <Loader />
            <p>Loading...</p>
        </div>
    );
}
