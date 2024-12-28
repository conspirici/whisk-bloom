import { X } from 'lucide-react'; // Import the X icon

function Chip({ ingredient, Delete }) {
  return (
    <div className="chip">
      {ingredient}
      <X className="delete-icon" onClick={() => Delete(ingredient)} />
    </div>
  );
}

export default Chip;
