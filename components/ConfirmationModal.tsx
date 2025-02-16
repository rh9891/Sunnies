"use client";
import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { atmaSans } from "@/fonts";

type ConfirmationModalProps = {
  onCloseAction: () => void;
  onConfirmAction: () => void;
};

export default function ConfirmationModal({
  onCloseAction,
  onConfirmAction,
}: ConfirmationModalProps) {
  const [open, setOpen] = useState(true);

  const handleConfirm = () => {
    setOpen(false);
    onConfirmAction();
  };

  return (
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
        onCloseAction();
      }}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-3xl data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <h2
              className={
                "text-xl font-medium text-start mb-4 bg-yellow-400 p-4 " +
                atmaSans.className
              }
            >
              Edit Confirmation
            </h2>
            <div className="bg-white p-6 rounded-lg">
              <h1
                className={
                  "text-lg sm:text-xl md:text-2xl text-center mb-6 " +
                  atmaSans.className
                }
              >
                Modifying a past entry may change your trends and insights. Are
                you sure you want to proceed?
              </h1>
            </div>
            <div className="bg-gray-50 px-4 py-3 flex justify-end gap-4 sm:px-6">
              <button
                className={
                  "px-4 py-2 bg-gray-200 rounded-lg " + atmaSans.className
                }
                onClick={onCloseAction}
              >
                Cancel
              </button>
              <button
                className={
                  "px-4 py-2 bg-yellow-400 rounded-lg cursor-pointer " +
                  atmaSans.className
                }
                onClick={handleConfirm}
              >
                Continue
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
