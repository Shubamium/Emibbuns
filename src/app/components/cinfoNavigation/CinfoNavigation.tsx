import React from 'react'
import { CiMenuBurger } from 'react-icons/ci'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import './cinfoNavigation.scss'
import { GiHamburger, GiHamburgerMenu } from 'react-icons/gi'
import Link from 'next/link'

type Props = {}

export default function CinfoNavigation({}: Props) {
	return (
		<div className='cinfo-navigation'>
			<Link href={'/commission/'} className="btn btn-back">
				<FaArrowLeft/>
				BACK
			</Link>
			<Link href={'/commission/info'} className='btn btn-menu'>
				<GiHamburgerMenu/>
			</Link>
			<div className="title">
				<div className="title-text">
					<h2>COMMISSION INFO ✿✿✿</h2>
				</div>
				<div className="icons">
					<div className="flower">
						<svg width="48" height="57" viewBox="0 0 48 57" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 32.667C0 39.0322 2.52856 45.1367 7.02944 49.6376C11.5303 54.1384 17.6348 56.667 24 56.667C24 43.3337 13.2533 32.667 0 32.667ZM24 12.667C25.7681 12.667 27.4638 13.3694 28.714 14.6196C29.9643 15.8699 30.6667 17.5655 30.6667 19.3337C30.6667 21.1018 29.9643 22.7975 28.714 24.0477C27.4638 25.2979 25.7681 26.0003 24 26.0003C22.2319 26.0003 20.5362 25.2979 19.286 24.0477C18.0357 22.7975 17.3333 21.1018 17.3333 19.3337C17.3333 17.5655 18.0357 15.8699 19.286 14.6196C20.5362 13.3694 22.2319 12.667 24 12.667ZM6.93333 25.3337C6.93333 27.1018 7.63571 28.7975 8.88595 30.0477C10.1362 31.2979 11.8319 32.0003 13.6 32.0003C15.0133 32.0003 16.32 31.547 17.3333 30.827V31.3337C17.3333 33.1018 18.0357 34.7975 19.286 36.0477C20.5362 37.2979 22.2319 38.0003 24 38.0003C25.7681 38.0003 27.4638 37.2979 28.714 36.0477C29.9643 34.7975 30.6667 33.1018 30.6667 31.3337V30.827C31.68 31.547 32.9867 32.0003 34.4 32.0003C36.1681 32.0003 37.8638 31.2979 39.114 30.0477C40.3643 28.7975 41.0667 27.1018 41.0667 25.3337C41.0667 22.667 39.4933 20.4003 37.2533 19.3337C39.4933 18.267 41.0667 15.9737 41.0667 13.3337C41.0667 11.5655 40.3643 9.86986 39.114 8.61961C37.8638 7.36937 36.1681 6.66699 34.4 6.66699C32.9867 6.66699 31.68 7.09366 30.6667 7.84033V7.33366C30.6667 5.56555 29.9643 3.86986 28.714 2.61961C27.4638 1.36937 25.7681 0.666992 24 0.666992C22.2319 0.666992 20.5362 1.36937 19.286 2.61961C18.0357 3.86986 17.3333 5.56555 17.3333 7.33366V7.84033C16.32 7.09366 15.0133 6.66699 13.6 6.66699C11.8319 6.66699 10.1362 7.36937 8.88595 8.61961C7.63571 9.86986 6.93333 11.5655 6.93333 13.3337C6.93333 15.9737 8.50667 18.267 10.7467 19.3337C8.50667 20.4003 6.93333 22.667 6.93333 25.3337ZM24 56.667C30.3652 56.667 36.4697 54.1384 40.9706 49.6376C45.4714 45.1367 48 39.0322 48 32.667C34.6667 32.667 24 43.3337 24 56.667Z" fill="white"/>
						</svg>
					</div>
					<div className="flower">
						<svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5249 4.37534C19.1813 3.71919 20.0713 3.35059 20.9994 3.35059C21.9275 3.35059 22.8176 3.71919 23.4739 4.37534L26.3299 7.23134C26.7044 6.70634 27.0649 6.17434 27.4184 5.64759C28.0869 4.64309 28.7274 3.15209 30.2167 3.56509C30.5853 3.66721 30.9103 3.88729 31.1419 4.19164C31.3736 4.49599 31.4992 4.86785 31.4994 5.25034V15.7503C31.4991 18.2318 30.6202 20.633 29.0186 22.5284C27.417 24.4237 25.196 25.6908 22.7494 26.1051V33.1051C24.4151 32.8228 25.9883 32.1432 27.3356 31.1239C28.683 30.1046 29.7649 28.7757 30.4897 27.2496C30.5883 27.042 30.7268 26.8558 30.8973 26.7017C31.0679 26.5476 31.2671 26.4286 31.4836 26.3515C31.7002 26.2743 31.9298 26.2406 32.1593 26.2523C32.3889 26.2639 32.6139 26.3206 32.8215 26.4192C33.0292 26.5178 33.2154 26.6563 33.3695 26.8269C33.5236 26.9974 33.6426 27.1966 33.7197 27.4132C33.7968 27.6297 33.8305 27.8593 33.8189 28.0889C33.8072 28.3184 33.7505 28.5435 33.6519 28.7511C32.6434 30.8763 31.116 32.7134 29.2107 34.0931C27.3053 35.4727 25.0833 36.3504 22.7494 36.6453C22.7494 37.6358 22.0372 38.5021 20.9994 38.5021C19.9617 38.5021 19.2494 37.6358 19.2494 36.6436C16.9159 36.349 14.6941 35.4718 12.7888 34.0928C10.8835 32.7138 9.35592 30.8774 8.34692 28.7528C8.14781 28.3335 8.12343 27.8522 8.27916 27.4149C8.43489 26.9776 8.75795 26.6201 9.17729 26.421C9.59663 26.2219 10.0779 26.1975 10.5152 26.3532C10.9525 26.5089 11.3101 26.832 11.5092 27.2513C12.2342 28.7771 13.3162 30.1057 14.6635 31.1247C16.0109 32.1436 17.5839 32.8229 19.2494 33.1051V26.1051C16.8028 25.6908 14.5818 24.4237 12.9802 22.5284C11.3786 20.633 10.4997 18.2318 10.4994 15.7503V5.25034C10.4993 4.86755 10.6247 4.49529 10.8564 4.19058C11.0881 3.88588 11.4133 3.66554 11.7822 3.56334C13.2627 3.15384 13.9172 4.65009 14.5822 5.64584C14.9322 6.17434 15.2944 6.70634 15.6689 7.23134L18.5249 4.37534ZM17.8809 9.96834C18.6019 10.7331 19.8654 12.2503 20.9994 12.2503C22.1334 12.2503 23.3969 10.7331 24.1179 9.96834L20.9994 6.84984L17.8809 9.96834Z" fill="#E6E199"/>
						</svg>
					</div>
					<div className="flower">
						<svg width="48" height="57" viewBox="0 0 48 57" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M0 32.667C0 39.0322 2.52856 45.1367 7.02944 49.6376C11.5303 54.1384 17.6348 56.667 24 56.667C24 43.3337 13.2533 32.667 0 32.667ZM24 12.667C25.7681 12.667 27.4638 13.3694 28.714 14.6196C29.9643 15.8699 30.6667 17.5655 30.6667 19.3337C30.6667 21.1018 29.9643 22.7975 28.714 24.0477C27.4638 25.2979 25.7681 26.0003 24 26.0003C22.2319 26.0003 20.5362 25.2979 19.286 24.0477C18.0357 22.7975 17.3333 21.1018 17.3333 19.3337C17.3333 17.5655 18.0357 15.8699 19.286 14.6196C20.5362 13.3694 22.2319 12.667 24 12.667ZM6.93333 25.3337C6.93333 27.1018 7.63571 28.7975 8.88595 30.0477C10.1362 31.2979 11.8319 32.0003 13.6 32.0003C15.0133 32.0003 16.32 31.547 17.3333 30.827V31.3337C17.3333 33.1018 18.0357 34.7975 19.286 36.0477C20.5362 37.2979 22.2319 38.0003 24 38.0003C25.7681 38.0003 27.4638 37.2979 28.714 36.0477C29.9643 34.7975 30.6667 33.1018 30.6667 31.3337V30.827C31.68 31.547 32.9867 32.0003 34.4 32.0003C36.1681 32.0003 37.8638 31.2979 39.114 30.0477C40.3643 28.7975 41.0667 27.1018 41.0667 25.3337C41.0667 22.667 39.4933 20.4003 37.2533 19.3337C39.4933 18.267 41.0667 15.9737 41.0667 13.3337C41.0667 11.5655 40.3643 9.86986 39.114 8.61961C37.8638 7.36937 36.1681 6.66699 34.4 6.66699C32.9867 6.66699 31.68 7.09366 30.6667 7.84033V7.33366C30.6667 5.56555 29.9643 3.86986 28.714 2.61961C27.4638 1.36937 25.7681 0.666992 24 0.666992C22.2319 0.666992 20.5362 1.36937 19.286 2.61961C18.0357 3.86986 17.3333 5.56555 17.3333 7.33366V7.84033C16.32 7.09366 15.0133 6.66699 13.6 6.66699C11.8319 6.66699 10.1362 7.36937 8.88595 8.61961C7.63571 9.86986 6.93333 11.5655 6.93333 13.3337C6.93333 15.9737 8.50667 18.267 10.7467 19.3337C8.50667 20.4003 6.93333 22.667 6.93333 25.3337ZM24 56.667C30.3652 56.667 36.4697 54.1384 40.9706 49.6376C45.4714 45.1367 48 39.0322 48 32.667C34.6667 32.667 24 43.3337 24 56.667Z" fill="white"/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	)
}