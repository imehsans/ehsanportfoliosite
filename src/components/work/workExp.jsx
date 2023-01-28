import React from 'react'

const workExp = () => {
	var jobs = [
		{
			title: 'Frontend Developer',
			'company-name': 'IKONIC Solutions',
			'joining-date': 'March 1st, 2023',
			'ends-Date': 'CURRENT',
			address: {
				street: 'I-9/3',
				city: 'Islamabad',
				country: 'Pakistan',
				link: 'https://ikonicsolution.com/',
			},
			'working-time': '04:00PM to 1:00AM',
			technologies: [
				'HTML',
				'CSS',
				'Bootstrap',
				'Tailwind CSS',
				'SASS',
				'JavaScript',
				'JQuery',
				'AJAX',
				'ReactJS',
				'ReduxJS',
				'NextJS',
				'Jira',
				'GIT',
				'...',
			],
			'company-type': 'IT Software Development',
			desc: 'Working on different websites some of them from scratch and mostly working with live site and following XD and Figma designs and make all them with approximately Zero Error in UI and fully functional site using Javascript Libraries and Frameworks.',
		},
		{
			title: 'Frontend Developer',
			'company-name': 'Merik Solutions',
			'joining-date': 'Jun 24th, 2022',
			'ends-Date': 'Feb 27th,2023',
			address: {
				street: 'I-10/3',
				city: 'Islamabad',
				country: 'Pakistan',
				link: 'https://meriksolutions.biz',
			},
			'working-time': '6:00PM to 3:00AM',
			technologies: [
				'HTML',
				'CSS',
				'Bootstrap',
				'Tailwind CSS',
				'SASS',
				'JavaScript',
				'JQuery',
				'AJAX',
				'ReactJS',
				'ReduxJS',
				'NextJS',
				'JSON-Server',
				'Jira',
				'GIT',
				'...',
			],
			'company-type': 'IT Software Development',
			desc: 'Working on different websites some of them from scratch and mostly working with live site and following XD and Figma designs and make all them with approximately Zero Error in UI.',
		},
		{
			title: 'Frontend Developer (PartTime)',
			'company-name': 'Codistan Ventures',
			'joining-date': 'Dec 1st, 2022',
			'ends-Date': 'Dec 31st, 2022',
			address: {
				street: 'I-11/3',
				city: 'Islamabad',
				country: 'Pakistan',
				link: 'https://codistan.org',
			},
			'working-time': '11:00AM to 5:00PM',
			technologies: [
				'HTML',
				'CSS',
				'Bootstrap',
				'Tailwind CSS',
				'SASS',
				'JavaScript',
				'JQuery',
				'AJAX',
				'ReactJS',
				'ReduxJS',
				'GIT',
				'...',
			],
			'company-type': 'IT Software Development',
			desc: 'Working on different websites some of them from scratch and mostly working with live site and following XD and Figma designs and make all them with approximately Zero Error in UI.',
		},
		{
			title: 'Frontend Developer',
			'company-name': 'Geeks Hub',
			'joining-date': 'Jan 1st, 2022',
			'ends-Date': 'Jun 20th, 2022',
			address: {
				street: 'IT Park mzail Chock',
				city: 'Abbottabad',
				country: 'Pakistan',
				link: 'https://geekshub.io',
			},
			'working-time': '2:00PM to 12:00AM',
			technologies: [
				'HTML',
				'CSS',
				'Bootstrap',
				'Tailwind CSS',
				'SASS',
				'JavaScript',
				'JQuery',
				'AJAX',
				'ReactJS',
			],
			'company-type': 'IT Software Development',
			desc: 'Working on different websites some of them from scratch and mostly working with live site and following XD and Figma designs and make all them with approximately Zero Error in UI.',
		},
		{
			title: 'Frontend Developer [INTERNEE]',
			'company-name': 'Todds Group',
			'joining-date': 'July 1st, 2021',
			'ends-Date': 'Dec 30th, 2021',
			address: {
				street: 'Pur-Gulab Street I',
				city: 'Abbottabad',
				country: 'Pakistan',
				link: 'https://toddsgroup.com',
			},
			'working-time': '8:00AM to 5:00PM',
			technologies: [
				'HTML',
				'CSS',
				'Bootstrap',
				'Tailwind CSS',
				'SASS',
				'JavaScript',
				'JQuery',
				'AJAX',
			],
			'company-type': 'IT Software Development',
			desc: 'Begin as Internee in the development Environment learning a professional skills to develop sites with according to the client requirements.',
		},
	]

	return (
		<>
			<h1 className="font-anton pt-8 text-[24px] md:text-[30px] text-primary">
				Work Experience
			</h1>
			<ul className="flex  justify-between flex-wrap">
				{jobs.map((job) => {
					return (
						<>
							{job ? (
								<li
									className="companies-details min-w-[100%]  px-2 py-3 text-left scale-90 bg-white shadow-xl hover:scale-100 max-auto md:min-w-96 rounded-xl md:px-4 hover:bg-dark hover:text-white"
									key={job?.id}
								>
									<div className="p-3">
										<h1 className="text-[24px] font-normal">{job.title}</h1>
										<div className="flex flex-wrap items-center gap-x-3 text-[20px]">
											<span className="italic font-semibold text-secondary">
												{job['company-name']}
											</span>
											<span className="text-light">
												[{job['joining-date']} - {job['ends-Date']} ]
											</span>
										</div>
										<div className="mb-3 text-[14px]">
											<span className="italic text-light">
												{job['company-type']}
											</span>
										</div>

										{job.address ? (
											<div className="mb-3 hidden-data">
												<h1>Company Address</h1>
												<div>
													{job?.address?.street ? (
														<p>-Street : {job?.address?.street}</p>
													) : (
														''
													)}
													{job?.address?.city ? (
														<p>-City : {job?.address?.city}</p>
													) : (
														''
													)}
													{job?.address?.country ? (
														<p>-Street : {job?.address?.country}</p>
													) : (
														''
													)}
													{job?.address?.link ? (
														<div>
															<a
																href={job?.address?.link}
																target="_blank"
																className="underline text-secondary"
																rel="noreferrer"
															>
																View Company Website
															</a>
														</div>
													) : (
														''
													)}
												</div>
											</div>
										) : (
											''
										)}
										{job['working-time'] ? (
											<div className="mb-3 hidden-data">
												<p>Working Time : {job?.['working-time']}</p>
											</div>
										) : (
											''
										)}
										{job?.desc ? (
											<div className="mb-3 hidden-data">
												<h1>Description:</h1>
												<p>{job?.desc}</p>
											</div>
										) : (
											''
										)}
										{job?.technologies ? (
											<div className="mb-3 hidden-data">
												<h1 className="mb-2">
													Works On The Following Technologies:
												</h1>
												<ul className="flex flex-wrap py-3 gap-x-3 gap-y-6">
													{job.technologies.map((tech) => {
														return (
															<li key={tech?.id}>
																<label className="px-3 py-2 capitalize border rounded border-primary text-primary hover:text-secondary hover:border-secondary">
																	{tech}
																</label>
															</li>
														)
													})}
												</ul>
											</div>
										) : (
											''
										)}
									</div>
								</li>
							) : (
								<li>
									<p className="p-4 bg-white text-dark">Zero Experience!</p>
								</li>
							)}
						</>
					)
				})}
			</ul>
		</>
	)
}

export default workExp
