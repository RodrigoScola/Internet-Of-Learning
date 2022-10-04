<?php 

function uploadFiles($files, $sanitizedId) {
     if (!empty($files)) {
          $args = [];
          if (!empty($files['courseImage'])) {
               uploadPostThumb($files['courseImage'], $sanitizedId);
          }
          if (!empty($_FILES['instructorImage'])) {
               $upload =  uploadImageUrl($files['instructorImage'], $sanitizedId);

               if($upload['url']) {
                    $args['instructor_image'] = $upload['url'];

               }
          }
          if (!empty($_FILES['courseBanner'])) {
               $upload =  uploadImageUrl($files['courseBanner'], $sanitizedId);

               if ($upload['url']) {
                    $args['course_banner'] = $upload['url'];
               }
          }

               wp_update_post([
                    'ID' => $sanitizedId,
                    'meta_input' => $args
               ]);
          $files = [];
     }
}



function uploadPostThumb($file, $postid ) {
     if (empty($file['name'])) {
          return null;
     }
          
     $upload = wp_upload_bits($file["name"], null, file_get_contents($file["tmp_name"]));

     $post_id = $postid; //set post id to which you need to set post thumbnail
     $filename = $upload['file'];
     $uploadfile = $uploaddir['basedir'] . '/' . 'custom-uploads' . '/';

     move_uploaded_file($filename, $uploadfile);  // (file name , designation)

     $wp_filetype = wp_check_filetype($filename, null);
     $attachment = array(
          'post_mime_type' => $wp_filetype['type'],
          'post_title' => sanitize_file_name($filename),
          'post_content' => '',
          'post_status' => 'inherit'
     );
     $attach_id = wp_insert_attachment($attachment, $filename, $post_id);
     require_once(ABSPATH . 'wp-admin/includes/image.php');
     $attach_data = wp_generate_attachment_metadata($attach_id, $filename);

     wp_update_attachment_metadata($attach_id, $attach_data);
     set_post_thumbnail($post_id, $attach_id); 
}


function uploadImageUrl($FILE, $post_id) {
     if (!$FILE['name']) return null;
   
// WordPress environmet
require( dirname(__FILE__) . '../../../../../../wp-load.php' );

// it allows us to use wp_handle_upload() function
require_once( ABSPATH . 'wp-admin/includes/file.php' );

// you can add some kind of validation here
if( empty( $FILE ) ) {
	wp_die( 'No files selected.' );
}

$upload = wp_handle_upload( 
	$FILE, 
	array( 'test_form' => false ) 
);

if( ! empty( $upload[ 'error' ] ) ) {
	wp_die( $upload[ 'error' ] );
}

// it is time to add our uploaded image into WordPress media library
$attachment_id = wp_insert_attachment(
	array(
		'guid'           => $upload[ 'url' ],
		'post_mime_type' => $upload[ 'type' ],
		'post_title'     => basename( $upload[ 'file' ] ),
		'post_content'   => '',
		'post_status'    => 'inherit',
	),
	$upload[ 'file' ], $post_id
);

if( is_wp_error( $attachment_id ) || ! $attachment_id ) {
	wp_die( 'Upload error.' );
}

// update medatata, regenerate image sizes
require_once( ABSPATH . 'wp-admin/includes/image.php' );

wp_update_attachment_metadata(
	$attachment_id,
	wp_generate_attachment_metadata( $attachment_id, $upload[ 'file' ] )
);

return $upload;

}