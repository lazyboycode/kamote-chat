import getConversations from "@/libs/getConversations";
import getUsers from "@/libs/getUsers";

import Sidebar from "@/components/Sidebar";
import ConversationList from "./ConversationList";

interface Props {
  children: React.ReactNode;
}
const ChatLayout = async ({ children }: Props) => {
  const conversations = await getConversations();
  const users = await getUsers();

  return (
    <div className="h-screen">
      {/* @ts-expect-error Server Component */}
      <Sidebar>
        <ConversationList initialConversations={conversations} users={users} />
        {children}
      </Sidebar>
    </div>
  );
};

export default ChatLayout;
