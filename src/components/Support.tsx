import React from "react";
import { PhoneIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { CpuChipIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

import supportImg from "../assets/support.jpg";

export default function Support() {
	return (
		<div className="w-full h-screen mt-24">
			<div className="w-full h-[700px] bg-gray-900/90 absolute">
				<img
					className="w-full h-full object-cover mix-blend-overlay"
					src={supportImg}
					alt=""
				/>
			</div>
			<div className="max-w-[1240px] mx-auto text-white relative">
				<div className="px-4 py-12">
					<h2 className="text-3xl pt-8 text-slate-300 uppercase text-center">
						Support
					</h2>
					<h3 className="text-5xl font-bold py-6 text-center">
						Finding the right team
					</h3>
					<p className="py-4 text-3xl text-slate-300">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
						nobis ipsam, necessitatibus quos, soluta accusamus ullam cupiditate
						et excepturi, minus blanditiis reprehenderit nemo ducimus recusandae
						nihil delectus. Ut, voluptas molestias!
					</p>
				</div>
				<div>
					<div>
						<div>
							<PhoneIcon />
							<h3>Sales</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Commodi facilis non illo magni nam, nostrum veniam unde quia, a
								architecto nemo error voluptas explicabo, aliquid delectus iste
								placeat cum voluptatibus.
							</p>
						</div>
						<div>
							<p>
								Contact us <ArrowRightIcon />
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
