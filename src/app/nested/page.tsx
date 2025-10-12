"use client"
import React, { useState } from 'react';
import * as HeadedUI from '../../index';
import { useTheme } from '../../index';

export default function Home() {
    const [selectedVariant, setSelectedVariant] = useState<HeadedUI.VariantEnum>(HeadedUI.VariantEnum.Primary);
    const [activeSection, setActiveSection] = useState<string>('carousel');
    const { theme, setTheme, themes } = useTheme();

    const eventData: HeadedUI.EventProps[] = [
        {
            variant: selectedVariant,
            name: "Milestone 1",
            date: new Date(2024, 2, 1),
            description: "Complete design document",
        },
        {
            variant: selectedVariant,
            name: "Project Kickoff",
            date: new Date(2024, 2, 10),
            description: "Start of the project",
            endDate: new Date(2024, 2, 15)
        },
        {
            variant: selectedVariant,
            name: "Team Meeting",
            date: new Date(2024, 2, 20),
            description: "Weekly team meeting",
        },
    ];

    const sections = [
        { id: 'carousel', label: 'Carousel' },
        { id: 'datepicker', label: 'Date Picker' },
        { id: 'grid', label: 'Grid' },
        { id: 'timeline', label: 'Timeline' },
        { id: 'calendar', label: 'Calendar' },
        { id: 'progress', label: 'Progress Bar' },
        { id: 'stepper', label: 'Stepper' },
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', width: '100%', backgroundColor: 'var(--base-background)' }}>
            {/* Sidebar */}
            <div style={{
                flex: '0 0 250px',
                padding: '20px',
                borderRight: '1px solid var(--border-color)',
                backgroundColor: 'var(--base-background)',
                position: 'sticky',
                top: 0,
                height: '100vh',
                overflowY: 'auto'
            }}>
                <h2 style={{ marginBottom: '20px', color: 'var(--base-foreground)' }}>Settings</h2>

                {/* Theme Selector */}
                <div style={{ marginBottom: '30px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: 'var(--base-foreground)'
                    }}>
                        Theme
                    </label>
                    <select
                        value={theme}
                        onChange={(e) => setTheme(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--base-background)',
                            color: 'var(--base-foreground)'
                        }}
                    >
                        {Object.keys(themes).map((themeName) => (
                            <option key={themeName} value={themeName}>
                                {themeName.charAt(0).toUpperCase() + themeName.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Variant Selector */}
                <div style={{ marginBottom: '30px' }}>
                    <label style={{
                        display: 'block',
                        marginBottom: '8px',
                        fontWeight: '600',
                        color: 'var(--base-foreground)'
                    }}>
                        Variant
                    </label>
                    <select
                        value={selectedVariant}
                        onChange={(e) => setSelectedVariant(e.target.value as HeadedUI.VariantEnum)}
                        style={{
                            width: '100%',
                            padding: '8px',
                            borderRadius: '4px',
                            border: '1px solid var(--border-color)',
                            backgroundColor: 'var(--base-background)',
                            color: 'var(--base-foreground)'
                        }}
                    >
                        {Object.values(HeadedUI.VariantEnum).map((variant) => (
                            <option key={variant} value={variant}>
                                {variant.charAt(0).toUpperCase() + variant.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Navigation */}
                <div>
                    <h3 style={{
                        marginBottom: '12px',
                        fontSize: '14px',
                        fontWeight: '600',
                        color: 'var(--base-foreground)'
                    }}>
                        Components
                    </h3>
                    <nav>
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    setActiveSection(section.id);
                                    document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                style={{
                                    display: 'block',
                                    padding: '8px 12px',
                                    marginBottom: '4px',
                                    borderRadius: '4px',
                                    textDecoration: 'none',
                                    color: activeSection === section.id ? 'var(--link-color)' : 'var(--base-foreground)',
                                    backgroundColor: activeSection === section.id ? 'var(--highlight)' : 'transparent',
                                    fontWeight: activeSection === section.id ? '600' : '400',
                                    transition: 'all 0.2s'
                                }}
                            >
                                {section.label}
                            </a>
                        ))}
                    </nav>
                </div>

                <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--border-color)' }}>
                    <a href={'/'} style={{ color: 'var(--link-color)', textDecoration: 'none' }}>
                        ← Back to main components
                    </a>
                </div>
            </div>

            {/* Main Content */}
            <div style={{
                flex: 1,
                padding: '40px',
                maxWidth: '1200px',
                color: 'var(--base-foreground)'
            }}>
                <h1 style={{ marginBottom: '40px' }}>Advanced Components</h1>

                {/* Carousel Section */}
                <section id="carousel" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Carousel
                    </h2>
                    <HeadedUI.HeadedCarousel variant={selectedVariant}>
                        <div style={{ padding: '40px', textAlign: 'center', fontSize: '24px' }}>Slide 1</div>
                        <div style={{ padding: '40px', textAlign: 'center', fontSize: '24px' }}>Slide 2</div>
                        <div style={{ padding: '40px', textAlign: 'center', fontSize: '24px' }}>Slide 3</div>
                    </HeadedUI.HeadedCarousel>
                </section>

                {/* Date Picker Section */}
                <section id="datepicker" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Date Picker
                    </h2>
                    <HeadedUI.HeadedDatePicker variant={selectedVariant}/>
                </section>

                {/* Grid Section */}
                <section id="grid" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Grid
                    </h2>
                    <HeadedUI.HeadedGrid variant={selectedVariant} width={'auto'} height={'auto'} fillDirection={'rows'}>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#ff6b6b', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Red Square</div>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#4ecdc4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Teal Square</div>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#45b7d1', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Blue Square</div>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#96ceb4', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Green Square</div>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#feca57', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Yellow Square</div>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#ff9ff3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Pink Square</div>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#54a0ff', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Light Blue Square</div>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#5f27cd', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Purple Square</div>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#00d2d3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Cyan Square</div>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#ff6348', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Orange Square</div>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#2ed573', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Lime Square</div>
                        <div style={{width: '256px', height: '256px', backgroundColor: '#747d8c', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold'}}>Gray Square</div>
                    </HeadedUI.HeadedGrid>
                </section>

                {/* Timeline Section */}
                <section id="timeline" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Timeline
                    </h2>
                    <HeadedUI.HeadedTimeline variant={selectedVariant} events={eventData}/>
                </section>

                {/* Calendar Section */}
                <section id="calendar" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Calendar
                    </h2>
                    <HeadedUI.HeadedCalendar
                        variant={selectedVariant}
                        initialYear={2024}
                        initialMonth={2}
                        events={eventData}
                    />
                </section>

                {/* Progress Bar Section */}
                <section id="progress" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Progress Bar
                    </h2>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ marginBottom: '10px' }}>69% Complete</p>
                        <HeadedUI.HeadedProgress progress={69} variant={selectedVariant}></HeadedUI.HeadedProgress>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ marginBottom: '10px' }}>25% Complete</p>
                        <HeadedUI.HeadedProgress progress={25} variant={selectedVariant}></HeadedUI.HeadedProgress>
                    </div>
                    <div>
                        <p style={{ marginBottom: '10px' }}>100% Complete</p>
                        <HeadedUI.HeadedProgress progress={100} variant={selectedVariant}></HeadedUI.HeadedProgress>
                    </div>
                </section>

                {/* Stepper Section */}
                <section id="stepper" style={{ marginBottom: '60px' }}>
                    <h2 style={{ marginBottom: '20px', paddingBottom: '10px', borderBottom: '2px solid var(--border-color)' }}>
                        Stepper
                    </h2>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ marginBottom: '10px' }}>Step 2 of 3 completed</p>
                        <HeadedUI.HeadedStepper
                            steps={['Step 1', 'Step 2', 'Step 3']}
                            currentStepsCompleted={1}
                            variant={selectedVariant}
                        />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <p style={{ marginBottom: '10px' }}>All steps completed</p>
                        <HeadedUI.HeadedStepper
                            steps={['Step 1', 'Step 2', 'Step 3']}
                            currentStepsCompleted={3}
                            variant={selectedVariant}
                        />
                    </div>
                    <div>
                        <p style={{ marginBottom: '10px' }}>Just started</p>
                        <HeadedUI.HeadedStepper
                            steps={['Step 1', 'Step 2', 'Step 3']}
                            currentStepsCompleted={0}
                            variant={selectedVariant}
                        />
                    </div>
                </section>
            </div>
        </div>
    )
}