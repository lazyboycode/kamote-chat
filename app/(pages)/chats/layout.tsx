import Sidebar from '@/components/Sidebar';

interface Props {
	children: React.ReactNode;
}
const ChatLayout = ({ children }: Props) => {
	return (
		<main className='grid h-screen grid-cols-[200px_300px_auto]'>
			<Sidebar />
			{children}
		</main>
	);
};

export default ChatLayout;
