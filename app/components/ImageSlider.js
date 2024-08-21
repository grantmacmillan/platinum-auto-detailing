"use client";

import React from 'react';
import CompareImage from 'react-compare-image';
import styles from './ImageSlider.module.css';
import Link from 'next/link';

const ImageSlider = ({ beforeImage, afterImage }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 0 }}>
            <div className={styles.wrapper}>
                <h3 className={styles.beforeText}>Before</h3>
                <div className={styles.container}>
                    <CompareImage
                        leftImage={beforeImage}
                        rightImage={afterImage}
                        sliderLineWidth={2}
                        sliderLineColor="#ffffff"
                    />
                    <div className={styles.galleryButton}>
                        <Link href="/gallery" passHref >
                            <span className="cta-button">

                                Our Gallery
                            </span>
                        </Link>
                    </div>
                </div>
                <h3 className={styles.afterText}>After</h3>
            </div>

        </div>

    );
};

export default ImageSlider;
