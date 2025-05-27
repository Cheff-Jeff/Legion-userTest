export interface DirSourceInfo {
  values: FileSourceInfo[];
  type: string;
  attributes: [];
  escaped_path: string;
  size: number;
  mimetype: null;
  links: {
    self: {
      href: string;
    };
    meta: {
      href: string;
    };
    history: {
      href: string;
    };
  };
}

export interface FileSourceInfo {
  path: string;
  commit: {
    hash: string;
    links: {
      self: {
        href: string;
      };
      html: {
        href: string;
      };
    };
    type: string;
  };
}

export interface CommitInfo {
  type: string;
  hash: string;
  date: string;
  author: {
    type: string;
    raw: string;
    user: {
      display_name: string;
      links: {
        self: {
          href: string;
        };
        avatar: {
          href: string;
        };
        html: {
          href: string;
        };
      };
      type: string;
      uuid: string;
      account_id: string;
      nickname: string;
    };
  };
  message: string;
  summary: {
    type: string;
    raw: string;
    markup: string;
    html: string;
  };
  links: {
    self: {
      href: string;
    };
    html: {
      href: string;
    };
    diff: {
      href: string;
    };
    approve: {
      href: string;
    };
    comments: {
      href: string;
    };
    statuses: {
      href: string;
    };
  };
  parents: [
    {
      hash: string;
      links: {
        self: {
          href: string;
        };
        html: {
          href: string;
        };
      };
      type: string;
    }
  ];
  rendered: {
    message: {
      type: string;
      raw: string;
      markup: string;
      html: string;
    };
  };
  repository: {
    type: string;
    full_name: string;
    links: {
      self: {
        href: string;
      };
      html: {
        href: string;
      };
      avatar: {
        href: string;
      };
    };
    name: string;
    uuid: string;
  };
  participants: [];
}
