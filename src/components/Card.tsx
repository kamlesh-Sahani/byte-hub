"use client";
import Link from "next/link";
import { motion } from "framer-motion"
const Card = ({ title, description, redirectTo }: {
  title: string;
  description: string
  redirectTo: string
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <Link href={`/tutorial/${redirectTo}`}>
        <div className="max-w-sm w-full rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300">
          <div className="p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-600 text-base">{description}</p>
          </div>
          <div className=" p-4">
            <button className="w-full py-2 px-4 bg-blue-600 text-white text-sm font-semibold rounded-md hover:bg-blue-500 transition duration-300">
              Lets Master It
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default Card
