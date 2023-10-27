import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: 'swns9aqk',
    dataset: 'production',
    token : 'skCE6peSxPY1FcIOqBEyA4rxSEHCuQdpE9IFBLflNbdKQtgIumuNChNYKQHxkGRqvyfqXATut34UG4M9XYkmPhZKI0po6vKEjN2eq90trSPfo1b3IdD93I9jwAhbxIKTO0KxAC8iJnxN5Cwh0mAOot404t7QHIOCIH26PEDWRrpr4PfUsvr2',
    useCdn: true, // Enable the Content Delivery Network (CDN) for faster responses
});