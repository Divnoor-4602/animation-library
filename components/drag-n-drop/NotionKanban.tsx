// "use client";

"use client";

import React from "react";

const NotionKanban = () => {
  return <div>NotionKanban</div>;
};

export default NotionKanban;

// import React, { useState } from "react";
// import { DEFAULT_CARDS } from "../../constants/index";
// import { motion } from "motion/react";
// import { Plus } from "lucide-react";
// import e from "express";

// export const NotionKanban = () => {
//   return (
//     <div className="h-screen w-full bg-neutral-900 text-neutral-50">
//       <Board />
//     </div>
//   );
// };

// const Board = () => {
//   const [cards, setCards] =
//     useState<{ title: string; id: string; column: string }[]>(DEFAULT_CARDS);

//   return (
//     <>
//       <div className="overflow-scroll flex w-full h-full p-12 gap-3">
//         <Column
//           title="Backlog"
//           column="backlog"
//           headingColor="text-neutral-500"
//           cards={cards}
//           setCards={setCards}
//         />
//         <Column
//           title="TODO"
//           column="todo"
//           headingColor="text-yellow-200"
//           cards={cards}
//           setCards={setCards}
//         />
//         <Column
//           title="In progress"
//           column="doing"
//           headingColor="text-blue-200"
//           cards={cards}
//           setCards={setCards}
//         />

//         <Column
//           title="Complete"
//           column="done"
//           headingColor="text-emerald-200"
//           cards={cards}
//           setCards={setCards}
//         />

//         {/* delete area - burn barrel */}
//         <BurnBarrel setCards={setCards} />
//       </div>
//     </>
//   );
// };

// interface ColumnProps {
//   title: string;
//   headingColor: string;
//   column: string;
//   cards: { title: string; id: string; column: string }[];
//   setCards: unknown;
// }

// const Column = ({
//   title,
//   headingColor,
//   column,
//   cards,
//   setCards,
// }: ColumnProps) => {
//   const [active, setActive] = useState<boolean>(false);

//   const handleDragStart = (
//     e: React.DragEvent<HTMLDivElement>,
//     card: { id: string; title: string; column: string }
//   ) => {
//     // on the event any data can be set
//     // setting the card id gives me access to the card when I start dragging it

//     e.dataTransfer.setData("cardId", card.id);
//   };

//   const handleDragOver = (e) => {
//     e.preventDefault();
//     highlightIndicator(e);
//     setActive(true);
//   };

//   const highlightIndicator = (e) => {
//     // get all indicators belonging to this column
//     const indicators = getIndicators(e);

//     // clear previous indicators
//     clearIndicators(indicators);

//     // highlight the closest indicator while dragging the card
//     const el = getNearestIndicator(e, indicators);

//     el.element.style.opacity = 1;
//   };

//   const clearIndicators = (els) => {
//     const indicators = els || getIndicators();

//     indicators.forEach((els) => {
//       els.style.opacity = 0;
//     });
//   };

//   const getNearestIndicator = (e, indicators) => {
//     const el = indicators.reduce(
//       (closest, child) => {
//         // get the position of the child indicator
//         const box = child.getBoundingClientRect();
//         // calculate the offset between the mouse and top of the indicator
//         const offset = e.clientY - (box.top + 50);
//         if (offset < 0 && offset > closest.offset) {
//           return { offset, element: child };
//         } else {
//           return closest;
//         }
//       },
//       {
//         offset: Number.NEGATIVE_INFINITY,
//         element: indicators[indicators.length - 1],
//       }
//     );

//     return el;
//   };

//   /**
//    * Retrieves all elements that have a data attribute matching the specified column.
//    *
//    * @param e - The event object (not used in the function).
//    * @returns An array of elements that match the data-column attribute.
//    */
//   const getIndicators = () => {
//     return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
//   };

//   const handleDragLeave = () => {
//     setActive(false);
//     clearIndicators(getIndicators());
//   };

//   const handleDragEnd = () => {
//     setActive(false);
//     clearIndicators(getIndicators());

//     // pull the card id from the dataTransfer object
//   };

//   // get filtered cards belonging to this column
//   const filteredCards = cards.filter((card) => card.column === column);

//   return (
//     <>
//       <div className="w-56 shrink-0">
//         <div className="flex items-center justify-between mb-3">
//           <h3 className={`font-medium ${headingColor}`}>{title}</h3>
//           <span className="text-sm rounded text-neutral-400">
//             {filteredCards.length}
//           </span>
//         </div>
//         {/* container to house all the cards */}
//         <div
//           onDragOver={handleDragOver}
//           onDragLeave={handleDragLeave}
//           onDrop={handleDragEnd}
//           className={`w-full h-full transition-colors ${
//             active ? "bg-neutral-800/50" : "bg-neutral-800/0"
//           }`}
//         >
//           {/* filtered cards */}
//           {filteredCards.map((card) => (
//             <Card key={card.id} {...card} handleDragStart={handleDragStart} />
//           ))}
//           <DropIndicator beforeId={-1} column={column} />
//           {/* form to add new cards */}
//           <AddCard column={column} setCards={setCards} />
//         </div>
//       </div>
//     </>
//   );
// };

// const Card = ({
//   title,
//   id,
//   column,
//   handleDragStart,
// }: {
//   title: string;
//   id: string;
//   column: string;
//   handleDragStart: (
//     e: React.DragEvent<HTMLDivElement>,
//     card: { id: string; title: string; column: string }
//   ) => void;
// }) => {
//   return (
//     <>
//       <DropIndicator beforeId={id} column={column} />
//       <motion.div
//         layout
//         layoutId={id}
//         onDragStart={(e) => handleDragStart(e, { id, title, column })}
//         className="cursor-grab active:cursor-grabbing border border-neutral-700 bg-neutral-800 p-3 rounded"
//         draggable="true"
//       >
//         <p className="text-neutral-100 text-sm">{title}</p>
//       </motion.div>
//     </>
//   );
// };

// const DropIndicator = ({
//   beforeId,
//   column,
// }: {
//   beforeId: string | number;
//   column: string;
// }) => {
//   return (
//     <>
//       <div
//         className="my-0.5 h-0.5 w-full opacity-0 bg-violet-400"
//         data-before={beforeId || -1}
//         data-column={column}
//       ></div>
//     </>
//   );
// };

// const BurnBarrel = ({
//   setCards,
// }: {
//   setCards: React.Dispatch<
//     React.SetStateAction<{ title: string; id: string; column: string }[]>
//   >;
// }) => {
//   const [active, setActive] = useState<boolean>(false);

//   const handleDragOver = () => {
//     e.preventDefault();
//     setActive(true);
//   };

//   const handleDragLeave = () => {
//     setActive(false);
//   };

//   const handleDragEnd = (e) => {
//     const cardId = e.dataTransfer.getData("cardId");

//     // filter out all the cards
//     setCards((prev) => prev.filter((c) => c.id !== cardId));

//     setActive(false);
//   };

//   return (
//     <>
//       <div
//         onDragOver={handleDragOver}
//         onDragLeave={handleDragLeave}
//         onDrop={handleDragEnd}
//         className={`grid mt-10 w-56 h-56 shrink-0 place-content-center rounded text-3xl border ${
//           active
//             ? "border-red-800 bg-red-800/20 text-red-500"
//             : "bg-neutral-500/20 border-neutral-500 text-neutral-500"
//         }`}
//       >
//         {active ? "🔥" : "🗑️"}
//       </div>
//     </>
//   );
// };

// const AddCard = ({ column, setCards }) => {
//   const [text, setText] = useState<string>("");

//   const [adding, setAdding] = useState<boolean>(false);

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // donot submit empty cards
//     if (!text.trim().length) return;

//     // add new card
//     const card = {
//       title: text,
//       id: Math.random().toString(),
//       column: column,
//     };

//     // set new card
//     setCards((prev: { title: string; id: string; column: string }[]) => [
//       ...prev,
//       card,
//     ]);
//   };

//   return (
//     <>
//       {adding ? (
//         <motion.form onSubmit={handleSubmit} layout>
//           <textarea
//             className="w-full rounded border border-violet-400 bg-violet-400/20 text-sm text-neutral-50 p-3"
//             placeholder="Add new task..."
//             onChange={(e) => setText(e.target.value)}
//           ></textarea>
//           {/* form action buttons */}

//           <div className="gap-1.5 flex justify-end items-center mt-1.5">
//             {/* close button */}
//             <button
//               className="text-neutral-400 transition-colors hover:text-neutral-50 text-xs px-3 py-1.5"
//               onClick={() => setAdding(false)}
//             >
//               Close
//             </button>
//             {/* add button */}
//             <button className="bg-neutral-50 px-3 py-1.5 text-xs rounded text-neutral-800 transition-colors hover:bg-neutral-300 flex items-center gap-1.5">
//               <span>Add</span>
//               <Plus size={12} />
//             </button>
//           </div>
//         </motion.form>
//       ) : (
//         <motion.button
//           layout
//           onClick={() => setAdding(true)}
//           className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 hover:text-neutral-50 transition-colors"
//         >
//           <span>Add cards</span>
//           <Plus size={12} />
//         </motion.button>
//       )}
//     </>
//   );
// };
