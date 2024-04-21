import GSFullScreenModal from "@/components/Shared/Modals/GSFullScreenModal";
import React from "react";

type TModalProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const FishModal = ({ open, setOpen }: TModalProps) => {
  return (
    <GSFullScreenModal open={open} setOpen={setOpen} title="Edit Fish">
      <div>Modal</div>
    </GSFullScreenModal>
  );
};

export default FishModal;
