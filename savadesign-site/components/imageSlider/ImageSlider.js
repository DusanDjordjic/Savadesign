import { useState } from "react"
import Image from 'next/image'
import styles from './ImageSlider.module.scss'
const ImageSlider = ({images}) => {
    return <div className={styles.slider}>
        {images.map((image, index) => {
            return <div key={index}>
                <Image src={image} width="300" height="300" layout="fixed"/>
                </div>
        })}
    </div>
}
export default ImageSlider