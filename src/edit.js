import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { RichText } from '@wordpress/block-editor';
import './editor.scss';
export default function Edit({ attributes, setAttributes }) {
	return (
		<div { ...useBlockProps({
      className: 'uncommon-timeline-year',
    }) }>
      <RichText
        tagName="h3"
        className="uncommon-timeline-year-title"
        placeholder="Year"
        value={ attributes.year }
        onChange={ ( year ) => setAttributes( { year } ) }
      />
      <div className="uncommon-timeline-year-images">
        <InnerBlocks
          allowedBlocks={ [ 'core/image' ] }
          template={ [
            [ 'core/image', { className: 'uncommon-timeline-year-image' } ],
            [ 'core/image', { className: 'uncommon-timeline-year-image' } ],
            [ 'core/image', { className: 'uncommon-timeline-year-image' } ],
          ] }
        />
      </div>
      <RichText
        tagName="h4"
        className="uncommon-timeline-year-title"
        placeholder="Title"
        value={ attributes.title }
        onChange={ ( title ) => setAttributes( { title } ) }
      />
      <RichText 
        tagName="p"
        className="uncommon-timeline-year-description"
        placeholder="Description"
        multiline="p"
        value={ attributes.description }
        onChange={ ( description ) => setAttributes( { description } ) }
      />
        
		</div>
	);
}
