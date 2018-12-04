import React, { Component } from 'react';


class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
                <label className="library-course__title" >Problem Solving</label>
                {/* icon component */}
                {/* arrow component
                action button */}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ut mauris interdum, malesuada leo sit amet, gravida odio. Sed consequat, eros non laoreet pretium, ex lacus pellentesque urna, eget gravida sem arcu consectetur metus. Praesent ac imperdiet lorem. Etiam maximus bibendum quam. Sed vitae velit sit amet tellus laoreet imperdiet. Vestibulum nec ante sed sem egestas aliquet in eget purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tincidunt velit id tristique mollis. Nunc sapien enim, mattis et pretium eget, venenatis in dolor. Morbi quis mi non est sollicitudin ultricies. Vestibulum at ligula id turpis tempor dictum vel quis arcu. Integer dignissim nunc sit amet purus pellentesque tincidunt. Nam tincidunt convallis lectus in gravida. Integer sed arcu at justo posuere varius id nec neque. Sed maximus diam vel augue semper efficitur. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                </div>
            </div>
        );
    }
}

export default LibraryCourse;