const Footer = () => {
    return (
        <footer className="bg-muted py-12 border-t border-border">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-secondary text-sm">
                    © {new Date().getFullYear()} Shahriar Alom Bhuiyan. All rights reserved.
                </div>
                <div className="flex gap-6 text-secondary text-sm">
                    <a href="https://www.linkedin.com/in/shahriar-alom-bhuiyan-036079225/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
                    <a href="https://www.behance.net/rabbikhan66" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Behance</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
