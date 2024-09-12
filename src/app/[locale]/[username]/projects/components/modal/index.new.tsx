// ToolbarLayout.tsx - Main layout with dynamic buttons in a toolbar
import React, { useState } from 'react';
import Modal from './components/modal'; // Import your enhanced modal component
import { Home, User, Settings, Info } from 'lucide-react'; // Example icons
import ContentArea from './components/content-area'; // Component to render content based on the selected icon

// Define the buttons in an array
const toolbarButtons = [
  { id: 'home', icon: <Home className="w-6 h-6" />, title: 'Home', content: 'Home Content' },
  { id: 'user', icon: <User className="w-6 h-6" />, title: 'User', content: 'User Profile' },
  { id: 'settings', icon: <Settings className="w-6 h-6" />, title: 'Settings', content: 'Settings Panel' },
  { id: 'info', icon: <Info className="w-6 h-6" />, title: 'Info', content: 'Information Section' },
];

const ToolbarLayout: React.FC = () => {
  const [selectedContent, setSelectedContent] = useState<string | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = (content: string) => {
    setSelectedContent(content);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedContent(null);
  };

  return (
    <div className="flex h-screen">
      {/* Toolbar */}
      <div className="flex flex-col bg-gray-800 text-white w-20 p-4 space-y-4">
        {toolbarButtons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleOpenModal(button.content)}
            title={button.title}
          >
            {button.icon}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="flex-grow p-4">
        <ContentArea selectedContent={selectedContent} />
      </div>

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onClosed={handleCloseModal}
        title={selectedContent ? `Content: ${selectedContent}` : 'Content'}
      >
        <ContentArea selectedContent={selectedContent} />
      </Modal>
    </div>
  );
};

export default ToolbarLayout;
