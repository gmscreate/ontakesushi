import { motion } from "framer-motion";

export function SectionDivider({ kanji = "御" }: { kanji?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1 }}
      className="mx-auto flex max-w-7xl items-center justify-center px-page py-16"
    >
      <div className="divider-mark w-full text-primary/60">
        <span className="font-jp text-2xl text-primary">{kanji}</span>
      </div>
    </motion.div>
  );
}
