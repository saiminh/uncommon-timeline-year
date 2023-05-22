import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
export default function save({ attributes }) {
	return (
		<div { ...useBlockProps.save({
      className: 'uncommon-timeline-year',
    }) }>
      <h3 className='uncommon-timeline-year-yearnumber'>{ attributes.year }</h3>
      <div className='uncommon-timeline-year-images'>
        <InnerBlocks.Content />
      </div>
      <h4 className='uncommon-timeline-year-title' dangerouslySetInnerHTML={{__html: attributes.title}}></h4>
      <div className='uncommon-timeline-year-description' dangerouslySetInnerHTML={{__html: attributes.description}}></div>
		</div>
	);
}
