import React from 'react';
import './QnA_page.css';
import { TypeAnimation } from 'react-type-animation';
import { useState } from "react";

 
function QnA_page(){
    const [idea, setIdea] = useState(false);
	const [startup, setStartup] = useState(false);
    const [brand, setBrand] = useState(false);
    const [digital, setDigital] = useState(false);
    const [technology, setTechnology] = useState(false);
    const [branding, setBranding] = useState(false);
    const [influencer, setInfluencer] = useState(false);
    const [public_relations, setPublic_relation] = useState(false);
    const [content, setContent] = useState(false);
    const [social, setSocial] = useState(false);
    const [performance, setPerformance] = useState(false);
    const [SEO, setSEO] = useState(false);
    
	const ideaHandler = () => {
		setIdea(true);
		setStartup(false);
        setBrand(false);
	};
	const startupHandler = () => {
		setIdea(false);
		setStartup(true);
        setBrand(false);
	};
    const brandHandler = () => {
		setIdea(false);
		setStartup(false);
        setBrand(true);
	};
    const digitalHandler = () => {
		setDigital(true);
		setTechnology(false);
        setBranding(false);
        setInfluencer(false);
		setPublic_relation(false);
        setContent(false);
	};
    const technologyHandler = () => {
		setDigital(false);
		setTechnology(true);
        setBranding(false);
        setInfluencer(false);
		setPublic_relation(false);
        setContent(false);
	};
    const brandingHandler = () => {
		setDigital(false);
		setTechnology(false);
        setBranding(true);
        setInfluencer(false);
		setPublic_relation(false);
        setContent(false);
	};
    const influencerHandler = () => {
		setDigital(false);
		setTechnology(false);
        setBranding(false);
        setInfluencer(true);
		setPublic_relation(false);
        setContent(false);
	};
    const public_relationsHandler = () => {
		setDigital(false);
		setTechnology(false);
        setBranding(false);
        setInfluencer(false);
		setPublic_relation(true);
        setContent(false);
	};
    const contentHandler = () => {
		setDigital(false);
		setTechnology(false);
        setBranding(false);
        setInfluencer(false);
		setPublic_relation(false);
        setContent(true);
	};
    const socialHandler = () => {
		setSocial(true);
		setPerformance(false);
        setSEO(false);
        
	};
    const performanceHandler = () => {
		setSocial(false);
		setPerformance(true);
        setSEO(false);
        
	};
    const SEOHandler = () => {
		setSocial(false);
		setPerformance(false);
        setSEO(true);
        
	};

    
    return(
        
        
        <div className='container'>
            <div className='row mt-3'>
                <div className='col-lg-8 col-md-8 col-12'>
                  <div className='pro-algin'>
                     <span className='qna-free'>Free</span>
                     <span className='qna-pro'>Pro</span>
                     <span className='qna-pro'>Premium</span>
                  </div>
                  <div className='mydivider mt-5'></div>
                  <div className='bussiness' >
                    <div className='logo'>
                    <img src='./images/logo.png' ></img>
                    </div>
                 <span> <TypeAnimation 
                  
                   sequence={[
                   // Same substring at the start will only be typed out once, initially
                  
                    'What is the stage of your business ?',
                     1000, 
        
                  ]}
                 wrapper="span"
                 speed={50}
                 style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
                   
                  /></span></div>
                </div>
               
		
                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'onClick={ideaHandler}>
                        <div className='qna-border'>
                            <img src='./images/stage_idea.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Idea / Vision</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={startupHandler}>
                    <div className='qna-border'>
                            <img src='./images/stage_startup.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Startup / Growth</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'onClick={brandHandler}>
                    <div className='qna-border'>
                            <img src='./images/stage_brand.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Brand / Enterprise</p>
                        </div>

                        
                    </div>
                </div>

                {/* Idea / Vision */}
                {idea && (
                    <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'What are you looking for (choose ONLY one)?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='qna-border'>
                            <img src='./images/market_strategy.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Go to Market Strategy</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/launch_plan.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Launch Plan of Action</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/traditional_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Traditional Marketing</p>
                        </div>

                        
                    </div>
                </div>

                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                        <div className='qna-border'>
                            <img src='./images/digital.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Digital Marketing</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'onClick={technologyHandler}>
                    <div className='qna-border'>
                            <img src='./images/technology.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Technology & Innovation</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                    <div className='qna-border'>
                            <img src='./images/branding.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Branding & Design</p>
                        </div>

                        
                    </div>
                </div>
                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                        <div className='qna-border'>
                            <img src='./images/public_relations.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Public Realations</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                    <div className='qna-border'>
                            <img src='./images/influencer_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Influencer Marketing</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                    <div className='qna-border'>
                            <img src='./images/content.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Content Production</p>
                        </div>

                        
                    </div>
                </div>
                </div>

			)}

            {/* Startup / Growth */}
			{startup && (
				<div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'What are you looking for (choose ONLY one)?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='qna-border'>
                            <img src='./images/market_strategy.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Go to Market Strategy</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/launch_plan.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Launch Plan of Action</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/traditional_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Traditional Marketing</p>
                        </div>

                        
                    </div>
                </div>

                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                        <div className='qna-border'>
                            <img src='./images/digital.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Digital Marketing</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={technologyHandler}>
                    <div className='qna-border'>
                            <img src='./images/technology.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Technology & Innovation</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                    <div className='qna-border'>
                            <img src='./images/branding.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Branding & Design</p>
                        </div>

                        
                    </div>
                </div>
                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                        <div className='qna-border'>
                            <img src='./images/public_relations.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Public Realations</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                    <div className='qna-border'>
                            <img src='./images/influencer_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Influencer Marketing</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                    <div className='qna-border'>
                            <img src='./images/content.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Content Production</p>
                        </div>

                        
                    </div>
                </div>
                </div>
			)}

           {/* Brand / Enterprise */}
            {brand && (
				<div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'What are you looking for (choose ONLY one)?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='qna-border'>
                            <img src='./images/market_strategy.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Go to Market Strategy</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/launch_plan.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Launch Plan of Action</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='qna-border'>
                            <img src='./images/traditional_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Traditional Marketing</p>
                        </div>

                        
                    </div>
                </div>

                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12' onClick={digitalHandler}>
                        <div className='qna-border'>
                            <img src='./images/digital.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Digital Marketing</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={technologyHandler}>
                    <div className='qna-border'>
                            <img src='./images/technology.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Technology & Innovation</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={brandingHandler}>
                    <div className='qna-border'>
                            <img src='./images/branding.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text mt-4'>Branding & Design</p>
                        </div>

                        
                    </div>
                </div>
                <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12' onClick={public_relationsHandler}>
                        <div className='qna-border'>
                            <img src='./images/public_relations.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Public Realations</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={influencerHandler}>
                    <div className='qna-border'>
                            <img src='./images/influencer_marketing.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Influencer Marketing</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={contentHandler}>
                    <div className='qna-border'>
                            <img src='./images/content.png'></img>
                            <div className='mydivider mt-4'></div>
                            <p className='qna-text'>Content Production</p>
                        </div>

                        
                    </div>
                </div>
                </div>
			)}
           
           {/* Digital Marketing */}
            {digital &&(
                <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'Anything specific in the digital marketing?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12' onClick={socialHandler}>
                        <div className='digital-text'>
                            
                            <p>Social Media Marketing</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={performanceHandler}>
                    <div className='digital-text'>
                           
                            <p>Performance marketing</p>
                        </div>

                        
                    </div>
                    <div className='col-lg-4 col-md-6 col-12' onClick={SEOHandler}>
                    <div className='digital-text'>
                           
                            <p>SEO, ASO & SEM</p>
                        </div>

                        
                    </div>
                </div>

                
                </div>
            )}

           {/* Technology and innovation */}
            {technology &&(
                <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'Anything specific in the technology and innovation?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                            <p>Website Development</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>App development</p>
                        </div>
                    </div>
                </div>
                </div>
            )}

             {/* Branding & Design */}
             {branding &&(
                <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'Anything specific in the branding and Designing?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                            <p>Product Branding</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>Service Branding</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                            <p>Company branding</p>
                        </div>

                    </div>
                </div>
                <div className='row qna-box mt-0'>
                    
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>Personal branding</p>
                        </div>
                    </div>
                </div>
                </div>
            )}

            {/* influencer */}
            {influencer &&(
                <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'What are your goals for influencer marketing?(For example, increasing brand awareness, driving product sales, expanding reach)',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

             
                
                </div>
            )}

            {/* public relation */}
            {public_relations &&(
                <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'Anything specific in the public relations?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                            <p>Press Release</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>TV & Radio</p>
                        </div>
                    </div>
                </div>
                </div>
            )}

            {/* Content */}
            {content &&(
                <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'Anything specific in the content production?',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                            <p>Video shoot</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>Photo shoot</p>
                        </div>
                    </div>
                </div>
                </div>
            )}

            {/* Social Media Marketing  */}
            {social &&(
                <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                            <p>Youtube</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>Facebook</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                            <p>Instagram</p>
                        </div>

                    </div>
                </div>
                
                </div>
            )}

            {/* Performance marketing  */}
            {performance &&(
                <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'Do you have a particular social media channel in mind?. If not, just click on “Generate Now”)',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                            <p>Youtube Ads</p>
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>Google Ads</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                            <p>Instagram Ads</p>
                        </div>

                    </div>
                </div>
                
                </div>
            )}

            {/* SEO, ASO & SEM */}
            {SEO &&(
                <div>
				<div className='bussiness' >
                <div className='logo'>
                <img src='./images/logo.png' ></img>
                </div>
             <span> <TypeAnimation 
              
               sequence={[
               // Same substring at the start will only be typed out once, initially
              
                'Do you have a particular preference in mind?. If not, just click on “Generate Now”, we’ll take care of the rest)',
                 1000, 
    
              ]}
             wrapper="span"
             speed={50}
             style={{ fontSize:'1rem', color: '#ececf1',flex: '1', textAlign:'center',gap:'10px'}}
               
              /></span>
              </div>

              <div className='row qna-box'>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                        <p>On Page SEO</p>
                            
                        </div>

                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>Off Page SEO</p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 col-12'>
                        <div className='digital-text'>
                            
                        <p>Local SEO</p>
                        </div>

                    </div>
                </div>
                <div className='row qna-box mt-0'>
                    
                    <div className='col-lg-4 col-md-6 col-12'>
                    <div className='digital-text'>
                           
                            <p>Technical SEO</p>
                        </div>
                    </div>
                </div>
                </div>
            )}



            </div>

            {/* Right accordion */}
            <div className='qna-header'>
                <div className='divider mt-5'></div>
                <div className='cards-group'>
                    <p className='stp-title'>Steps</p>
                    <div className='step-group'>
                        <span className='line'></span>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Stage Selection</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Service Requirements</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Service Spefication</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Business bio</p>
                        </div>
                        <div className='step'>
                            <span className='circle'></span>
                            <p className='text'>Vendor partership</p>
                        </div>
                    </div>

                    <div className='company-group'>
                        <p>Privacy policies</p>
                        <p>Terms and conditions</p>
                        <p>© 2023 TEN Inc.</p>
                        <p>Contact us</p>
                    </div>

                </div>
            </div>
        </div>
       

    );
}
export default QnA_page;